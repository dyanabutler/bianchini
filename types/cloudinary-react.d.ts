declare module 'cloudinary-react' {
    import * as React from 'react';
  
    export interface CloudinaryContextProps {
      cloud_name: string;
      children?: React.ReactNode;
    }
  
    export class CloudinaryContext extends React.Component<CloudinaryContextProps> {}
  
    export interface VideoProps {
      publicId: string;
      width?: string | number;
      height?: string | number;
      controls?: boolean;
      innerRef?: React.Ref<HTMLVideoElement>;
    }
  
    export class Video extends React.Component<VideoProps> {}
  }
  