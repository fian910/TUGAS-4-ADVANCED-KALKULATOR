export default class Display {
    constructor(displayElement) {
      this._displayElement = displayElement; // Menyimpan elemen display sebagai field privat (enkapsulasi)
    }
  
    get value() {
      return this._displayElement.innerText; // Mengambil nilai dari elemen display
    }
  
    set value(value) {
      this._displayElement.innerText = value; // Mengatur nilai untuk elemen display
    }
  
    clear() {
      this.value = '0'; // Mengatur display kembali ke '0'
    }
  }