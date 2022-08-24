// @ts-ignore
/* eslint-disable */

declare namespace API {

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type CNIFaceResponse<T> = {
    code: number;
    message: string;
    result: T;
    total?: number; 
  }

  type ErrorResponse = {
    errorCode: string;
    errorMessage?: string;
    success?: boolean;
  };

  type CurrentUser = {
    username: string;
    authorities: string[];
  };

  type CurrentUserResponse = CNIFaceResponse<CurrentUser>;

  type LoginParams = {
    username?: string;
    password?: string;
    rememberMe?: boolean;
  };

  type LoginResult = {
    token: string;
    authorities?: string[];
  };

  type LoginResponse = CNIFaceResponse<LoginResult>;

  type FaceDetectParams = {
    faceImageBase64: string;
    score: number;
  } 

  type FaceDetectResult = {
    score: number;
    x: number;
    y: number;
    w: number;
    h: number;
    kps: number[];
  }

  type FaceDetectResponse = CNIFaceResponse<FaceDetectResult[]>;

  type ExtractFeatureParams = {
    faceImageBase64: string;
    kps?: number[]; 
  }

  type ExtractFeatureResult = {
    feature: number[];
  }

  type ExtractFeatureResponse = CNIFaceResponse<ExtractFeatureResult>;

  type SimilarityParams = {
    feature1: number[];
    feature2: number[];
  }

  type SimilarityResult = {
    similarity: number;
  }
  
  type SimilarityResponse = CNIFaceResponse<SimilarityResult>;

  type InitAndRegisterAdminParams = {
    password: string;
  }

  type InitAndRegisterAdminResponse = CNIFaceResponse;
}
