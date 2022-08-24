// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

export async function currentUser(options?: { [key: string]: any }) {
  return request<API.CurrentUserResponse>('/api/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}

export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.LoginResponse>('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function faceDetect(body: API.FaceDetectParams, options?: { [key: string]: any }) {
  return request<API.FaceDetectResponse>('/api/detect/face', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function extractFeature(body: API.ExtractFeatureParams, options?: { [key: string]: any }) {
  return request<API.ExtractFeatureResponse>('/api/recognition/extract_feature', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function similarity(body: API.SimilarityParams, options?: { [key: string]: any }) {
  return request<API.SimilarityResponse>('/api/recognition/similarity', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function initAndRegisterAdmin(body: API.InitAndRegisterAdminParams, options?: { [key: string]: any }) {
  return request<API.InitAndRegisterAdminResponse>('/api/init_and_register_admin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
