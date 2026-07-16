export interface Photo {
  url: string;
  caption?: string;
}

export interface Album {
  id: string;
  title: string;
  description: string;
  cover: string;          // 相册封面图 URL
  photos: Photo[];        // 相册内的照片
}

export const albums: Album[] = [
  // 示例相册：
  // {
  //   id: "1",
  //   title: "我的相册",
  //   description: "记录生活的点滴",
  //   cover: "/photo1.jpg",
  //   photos: [
  //     { url: "/photo1.jpg", caption: "第一张照片" },
  //     { url: "/photo2.jpg", caption: "第二张照片" },
  //   ],
  // },
];
