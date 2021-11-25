const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journeys => journeys.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journeys => journeys.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journeys => transport === journeys.transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journeys => journeys.distance > minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((acc, currentJourney) => acc + currentJourney.distance, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
    return this.journeys.map((journey) => {
      return journey.transport;
    })
    .filter((transport, index, array) => {
      return array.indexOf(transport) === index;
    });
  };




module.exports = Traveller;
