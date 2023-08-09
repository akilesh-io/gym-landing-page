const breakpoints = [694, 640, 384, 256, 128, 96, 64, 48];


const pic = [
  {
    src: "https://lh5.googleusercontent.com/p/AF1QipNeQVHY9i14LiBVN7GuexixmQar4hUxRSo1JaOh=w1520-h1027-k-no",
    width: 1520,
    height: 1027,
  },
  {
    src: "https://lh5.googleusercontent.com/p/AF1QipPWcLMMXZ-DBsqNmIGaT7Gu4Wpep4cmkqJZw1Ec=w1520-h1027-k-no",
    width: 1520,
    height: 1027,
  },
  {
    src: "https://lh5.googleusercontent.com/p/AF1QipM7kKlVgsJ7UkrIExtrhECvq6yATP47OvILB9XY=w1520-h1027-k-no",
    width: 1520,
    height: 1027,
  },
  {
    src: "https://lh5.googleusercontent.com/p/AF1QipNeQVHY9i14LiBVN7GuexixmQar4hUxRSo1JaOh=w1520-h1027-k-no",
    width: 1520,
    height: 1027,
  },
  {
    src: "https://lh5.googleusercontent.com/p/AF1QipPou9guINyO7kQTkWbd3KKhJqQiBEps7myvMg70=w406-h506-k-no",
    width: 406,
    height: 506,
  },
  {
    src: "https://lh5.googleusercontent.com/p/AF1QipPYRSxBVztOudf5ZGIgiqxJK-VMpmPHQ_4ajR-a=w406-h508-k-no",
    width: 406,
    height: 508,
  },
  {
    src: "https://lh5.googleusercontent.com/p/AF1QipOTZ4gbj-MvAvw1mGoBJz2qBO8Lbh5e5pU3f2c=w406-h338-k-no",
    width: 406,
    height: 338,
  },
  {
    src: "https://lh5.googleusercontent.com/p/AF1QipP1XKN4rOvetsIZ9rG2ur4BE-BiEvsfSTQAMc8=w406-h508-k-no",
    width: 406,
    height: 338,
  },
];

const tform = [
  {
    src: "/1.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "/2.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "/3.jpg",
    width: 1676,
    height: 1080,
  },
  {
    src: "/4.jpg",
    width: 718,
    height: 1080,
  },
  {
    src: "/5.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "/6.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "/7.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "/8.jpg",
    width: 1080,
    height: 1080,
  },
];
export const photos = pic.map((photo) => ({
  src: photo.src,
  width: photo.width,
  height: photo.height,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: photo.src,
      width: breakpoint,
      height,
    };
  }),
}));

export const trans = tform.map((photo) => ({
  src: photo.src,
  width: photo.width,
  height: photo.height,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: photo.src,
      width: breakpoint,
      height,
    };
  }),
}));

