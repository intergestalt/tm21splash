const wobbled = (i, slowness = 4, amount = 2) => {
  const delta = (-Math.cos(i / slowness) + 1) * amount
  return i + delta
}

const makePoint = (p, corners) => {
  const i = p % corners[4]

  const scaleX = 0.9
  const scaleY = 0.9

  let x = 0
  if (i >= corners[0] && i < corners[1]) x = i * (100 / (corners[1] - corners[0]))
  else if (i >= corners[1] && i < corners[2]) x = 100
  else if (i >= corners[2] && i < corners[3]) x = (corners[3] - i) * (100 / (corners[3] - corners[2]))
  else if (i >= corners[3] && i < corners[4]) x = 0
  x = x * scaleX + (1-scaleX)*50

  let y = 0
  if (i >= corners[0] && i < corners[1]) y = 0
  else if (i >= corners[1] && i < corners[2]) y = (i - corners[1]) * (100 / (corners[2] - corners[1]))
  else if (i >= corners[2] && i < corners[3]) y = 100
  else if (i >= corners[3] && i < corners[4]) y = (corners[4] - i) * (100 / (corners[4] - corners[3]))
  y = y * scaleY + (1 - scaleY) * 50

  return [x, y]
}

const generatePoints = (width, height, pos) => {
  const wobbleSlowness = (width + height)
  const wobbleAmount = 200 * (400 / (width + height))

  const corners = [
    0,
    width,
    width + height,
    width + height + width,
    width + height + width + height
  ]

  const w1 = 2 * width / 7
  const w2 = 3 * width / 7
  const h1 = 2 * height / 7
  const h2 = 3 * height / 7

  const initialPointsPos = [
    //0,110,220,330
    /*30,
    70,
    100 + 30,
    100 + 70,
    200 + 30,
    200 + 70,
    300 + 30,
    300 + 70*/
    w1, w1 + w2,
    width + h1, width + h1 + h2,
    width + height + w1, width + height + w1 + w2,
    width + height + width + h1, width + height + width + h1 + h2,
  ]


  /*
  useAnimationFrame(deltaTime => {
    // Pass on a function to the setter of the state
    // to make sure we always have the latest state
    setScrollPos(prevScrollPos => (prevScrollPos + deltaTime * 0.05))
    //setScrollPos(prevScrollPos => window.scrollY )
  })
  */

  //const initialPoints = [
  //  [  0,  70],
  //  [  0,  30],
  //  [ 30,   2],
  //  [ 70,   2],
  //  [100,  30],
  //  [100,  70],
  //  [ 70,  98],
  //  [ 30,  98]
  //]

  return initialPointsPos.map(
    //(init, index) => makePoint(init + pos, corners)
    (init, index) => makePoint(init + wobbled(pos, wobbleSlowness, (index % 2) * wobbleAmount), corners)
  )
}

export {
  generatePoints
}