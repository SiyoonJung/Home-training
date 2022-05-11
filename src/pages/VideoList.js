const VideoList = () => {
  const vidList = document.querySelector('.vidList');
  const key = 'AIzaSyA1fDMXcSMZ5dv0-Ri9Yo532XvYPQeV_fE';
  const playlistId = {
    Arm: 'PLr8jYWsFcIRjnlnR5aFh5do_n2snSAZlZ',
    Belly: 'PLr8jYWsFcIRhdSJlNfsO4NaEMeYgGbU0F',
    Thigh: 'PLr8jYWsFcIRiLckTK3j694aBz5pWXSezR',
    Whole: 'PLr8jYWsFcIRgXplBNcLsx1sLptEnxZlbN',
  };
  const url = {
    ArmUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId.Arm}&maxResults=5`,
    BellyUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId.Belly}&maxResults=5`,
    ThighUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId.Thigh}&maxResults=5`,
    WhoelUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId.Whole}&maxResults=5`,
  };

  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      const items = json.items;
      console.log(items);
      let result = '';

      items.map((item) => {
        let title = item.snippet.title;
        if (title.length > 20) {
          title = title.substr(0, 20) + '...';
        }

        let con = item.snippet.description;
        if (con.length > 50) {
          con = con.substr(0, 50) + '...';
        }

        result += `
        <article>
          <a href="${item.snippet.resourceId.videoId}" class="pic">
            <img src="${item.snippet.thumbnails.medium.url}">
          </a>
          <div class="con">
            <h2>${title}</h2>
            <p>${con}</p>
          </div>
        </article>`;
      });
      vidList.innerHTML = result;
    });
  return <div className="vidList"></div>;
};
export default VideoList;
