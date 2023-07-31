  const breakpoints = [694, 640, 384, 256, 128, 96, 64, 48];

  const pic = [
    {
      src: "https://gitlab.com/akilesh_io/the-boss-gym/-/raw/main/public/1.jpg",
      width: 1080,
      height: 694,
    },
    {
      src: "https://gitlab.com/akilesh_io/the-boss-gym/-/raw/main/public/2.jpg",
      width: 1080,
      height: 694,
    },
    {
      src: "https://gitlab.com/akilesh_io/the-boss-gym/-/raw/main/public/3.jpg",
      width: 694,
      height: 694,
    },
    {
      src: "https://gitlab.com/akilesh_io/the-boss-gym/-/raw/main/public/4.jpg",
      width: 694,
      height: 694,
    },
    {
      src: "https://gitlab.com/akilesh_io/the-boss-gym/-/raw/main/public/5.jpg",
      width: 694,
      height: 694,
    },
    {
      src: "https://gitlab.com/akilesh_io/the-boss-gym/-/raw/main/public/6.jpg",
      width: 694,
      height: 694,
    },
    {
      src: "https://gitlab.com/akilesh_io/the-boss-gym/-/raw/main/public/7.jpg",
      width: 694,
      height: 694,
    },
    {
      src: "https://gitlab.com/akilesh_io/the-boss-gym/-/raw/main/public/8.jpg",
      width: 1080,
      height: 694,
    },
    {
      src: "https://gitlab.com/akilesh_io/the-boss-gym/-/raw/main/public/9.jpg",
      width: 694,
      height: 694,
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


