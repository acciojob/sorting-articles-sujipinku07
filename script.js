//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
  const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
    'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
    'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive',
    'Anywhere But Here', 'An Old Dog'
  ];

  // Function to remove "a", "an", "the" from the article titles
  function strip(bandName) {
    return bandName.replace(/^(a |an |the )/i, '').trim();
  }

  // Sort the articles by ignoring "a", "an", "the"
  const sortedBands = bands.sort((a, b) => strip(a).localeCompare(strip(b)));

  // Insert sorted articles into the ul#bands
  const bandList = document.getElementById('bands'); // corrected from 'band' to 'bands'
  sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
  });
})