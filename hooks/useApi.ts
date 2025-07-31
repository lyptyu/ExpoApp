import { useState, useEffect } from 'react';

const BASE_URL = 'http://152.136.11.133:18888';

interface ApiResponse<T = any> {
  data: T;
  code?: number;
  message?: string;
}

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

// 基础请求函数
export const apiRequest = async <T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> => {
  const url = `${BASE_URL}${endpoint}`;
  
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Network request failed');
  }
};

// GET请求hook
export const useApiGet = <T = any>(endpoint: string, dependencies: React.DependencyList = []) => {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const response = await apiRequest<T>(endpoint);
        
        if (isMounted) {
          setState({
            data: response.data,
            loading: false,
            error: null,
          });
        }
      } catch (error) {
        if (isMounted) {
          setState({
            data: null,
            loading: false,
            error: error instanceof Error ? error.message : 'Unknown error',
          });
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [endpoint]);

  return state;
};

// POST请求hook
export const useApiPost = <T = any>() => {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const postData = async (endpoint: string, data: any) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      const response = await apiRequest<T>(endpoint, {
        method: 'POST',
        body: JSON.stringify(data),
      });
      
      setState({
        data: response.data,
        loading: false,
        error: null,
      });
      
      return response;
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      });
      throw error;
    }
  };

  return { ...state, postData };
};