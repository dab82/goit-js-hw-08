import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

player.on('play', onPlay => player.on('timeupdate', throttle(setCurrentTimeToStorage, 1000)));

// function onPlay() {
//   player.on('timeupdate', throttle(setCurrentTimeToStorage, 1000));
// }

function setCurrentTimeToStorage(event) {
  localStorage.setItem(STORAGE_KEY, event.seconds);
}

getCurrentTimeFromStorage();

function getCurrentTimeFromStorage() {
  const storedTimeVideo = localStorage.getItem(STORAGE_KEY);
  if (storedTimeVideo) {
    player.setCurrentTime(storedTimeVideo);
  }
}
