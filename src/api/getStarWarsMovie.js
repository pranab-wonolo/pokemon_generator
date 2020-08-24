const getStarWarsMovie = `
  query Film($title: String) {
    Film(title: $title){
      title
      characters{
        name
      }
    }

  }
`;

export default getStarWarsMovie;
