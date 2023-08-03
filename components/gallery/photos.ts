  const breakpoints = [694, 640, 384, 256, 128, 96, 64, 48];

  const pic = [
    {
      src: "/1.jpg",
      width: 1124,
      height: 750,
    },
    {
      src: "/2.jpg",
      width: 1000,
      height: 450,
    },
    {
      src: "/3.jpg",
      width: 1440,
      height: 1440,
    },
    {
      src: "/4.jpg",
      width: 1440,
      height: 1440,
    },
    {
      src: "/5.jpg",
      width: 1080,
      height: 1080,
    },
    {
      src: "/6.jpg",
      width: 1080,
      height: 1350,
    },
    {
      src: "/7.jpg",
      width: 1080,
      height: 1080,
    },
    {
      src: "/8.jpg",
      width: 1080,
      height: 566,
    },
    {
      src: "/9.jpg",
      width: 1080,
      height: 566,
    },
    {
      src: "/10.jpg",
      width: 1080,
      height: 566,
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

  export default photos;



    // {
    //     src: a,
    //     width: 694,
    //     height: 694
    // },
    // {
    //     src: b,
    //     width: 4,
    //     height: 3
    // }, 
    // {
    //     src: c,
    //     width: 4,
    //     height: 3
    // },
    // {
    //     src: d,
    //     width: 4,
    //     height: 3
    // }


