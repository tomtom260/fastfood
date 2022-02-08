export class Drink {
  constructor(
    public name: string,
    private price: number,
    public size: string,
    public image: StaticImageData
  ) {}
  getPrice() {
    return this.price
  }
}
