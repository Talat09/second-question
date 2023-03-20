class Cars {
  name;
  service_code;
  services;
  price;

  constructor(name, service_code, services, price) {
    this.name = name;
    this.service_code = service_code;
    this.services = services;
    this.price = price;
  }
  calculatePrice() {
    const totalPrice = this.price.reduce((total, price) => total + price);
    if (totalPrice > 10000) {
      return `ToTal Bill:${totalPrice},a Complimentary Cleaning Provided`;
    } else {
      return `Total Bill: ${totalPrice}`;
    }
  }
}
const TotalBill = new Cars(
  "Hatchback",
  ["BS01", "BS02"],
  ["Basic Servicing", "Engine Fixing"],
  [2000, 5000]
);
console.log(TotalBill, TotalBill.calculatePrice());
