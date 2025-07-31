import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useApiGet } from '../../hooks/useApi';

export default function Index() {
  const { data, loading, error } = useApiGet('/auth/webversion?env=test&uguid=dfed35da5fd5bf6cff000a6a928811e1');

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
        <Text className="mt-4 text-gray-600">加载中...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center p-4">
        <Text className="text-red-500 text-center">请求失败: {error}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 p-4">
      <Text className="text-2xl font-bold mb-4">API 响应数据</Text>
      <View className="bg-gray-100 p-4 rounded-lg">
        <Text className="text-sm font-mono">
          {data ? JSON.stringify(data, null, 2) : '暂无数据'}
        </Text>
      </View>
    </View>
  );
}