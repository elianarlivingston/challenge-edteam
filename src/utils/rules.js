const rules = {
  username(value) {
    return value.length >= 10 ? true : false;
  },
  email(value) {
    return value.length >= 10 ? true : false;
  },
  title(value) {
    return value.length >= 10 ? true : false;
  },
  content(value) {
    return value.length >= 20 ? true : false;
  },
  images(value) {
    return value.length <= 5 ? true : false;
  },
  video(value) {
    return value.length <= 1 ? true : false;
  },
};
