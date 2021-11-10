self.addEventListener('periodicsync', event => {
    if (event.tag == 'check_for_dualis_delta') {
      event.waitUntil(fetchDelta());
    }
  });