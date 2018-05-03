function kClosestStars(seq, k) {
  let closestStars = new Array(k);

}

function disToEarth(pos) {
  let dis = Math.sqrt(Math.pow(pos[0], 2) + Math.pow(pos[1], 2));
  return Math.sqrt(Math.pow(pos[2], 2) + Math.pow(dis, 2));
}
