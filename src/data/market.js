// The upcoming market, shown in the site-wide pop-up until it closes.
// Swap these out for the next one — the pop-up retires itself at `endsAt`.
const market = {
  id: "ethical-street-fair-2026-09-27",
  name: "Ethical Street Fair",
  dateLabel: "Sunday, September 27",
  hoursLabel: "12–6 pm",
  where: "W 64th St, between Central Park West and Broadway",
  address: "2 West 64th St, New York, NY 10023",
  forecast: "Partly cloudy, low 70s",
  endsAt: "2026-09-27T18:00:00-04:00",
};

market.mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  market.address
)}`;

export default market;
