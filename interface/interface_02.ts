interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}
interface story {
  Creatstory(): void;
}
class Instagram implements TakePhoto, story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
  Creatstory(): void {
    console.log("The Story");
  }
}
const data = new Instagram("102sony", "i donen,t no", 32);
data.Creatstory();
export {};
