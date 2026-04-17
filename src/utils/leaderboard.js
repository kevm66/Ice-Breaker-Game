export function loadLeaderboard() {
  const data = localStorage.getItem('hotSeatLeaderboard')
  return data ? JSON.parse(data) : []
}

export function saveToLeaderboard(name, score) {
  const leaderboard = loadLeaderboard()
  leaderboard.push({
    name: name,
    score: score,
    timestamp: new Date().toISOString()
  })
  localStorage.setItem('hotSeatLeaderboard', JSON.stringify(leaderboard))
}

export function clearLeaderboard() {
  localStorage.removeItem('hotSeatLeaderboard')
}

export function seedLeaderboardWithTestData() {
  const testNames = [
    'Alice Johnson', 'Bob Smith', 'Charlie Brown', 'Diana Prince',
    'Ethan Hunt', 'Fiona Gallagher', 'George Wilson', 'Hannah Montana',
    'Ian Malcolm', 'Julia Roberts', 'Kevin Hart', 'Laura Palmer',
    'Michael Scott', 'Nancy Drew', 'Oscar Martinez', 'Pam Beesly',
    'Quinn Fabray', 'Rachel Green', 'Steve Rogers', 'Tina Fey',
    'Uma Thurman', 'Victor Stone', 'Wanda Maximoff', 'Xavier Charles',
    'Yara Greyjoy', 'Zack Morris', 'Amy Santiago', 'Ben Wyatt',
    'Claire Dunphy', 'Dwight Schrute'
  ]

  // Check if leaderboard already has data
  const existingData = localStorage.getItem('hotSeatLeaderboard')
  if (existingData) {
    const parsed = JSON.parse(existingData)
    if (parsed.length > 0) {
      return // Don't seed if there's already data
    }
  }

  // Generate test data
  const testData = testNames.map((name, index) => ({
    name: name,
    score: Math.floor(Math.random() * 15) + 1, // Random score between 1 and 15
    timestamp: new Date(Date.now() - (index * 3600000)).toISOString() // Stagger timestamps by 1 hour each
  }))

  localStorage.setItem('hotSeatLeaderboard', JSON.stringify(testData))
}
