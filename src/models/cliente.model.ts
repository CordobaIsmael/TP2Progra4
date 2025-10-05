export class Cliente {
    constructor(
  protected id: number,
  protected nombre: string,
  protected telefono: string,
  protected direccion: string)
    {}

//getters
public getId(): number {
    return this.id;
}
public getNombre(): string {
    return this.nombre;
}
public getTelefono(): string {
    return this.telefono;
}
public getDireccion(): string {
    return this.direccion;
}
//setters
public setId(id: number): void {
    this.id = id;
}
public setNombre(nombre: string): void {
    this.nombre = nombre;
}
public setTelefono(telefono: string): void {
    this.telefono = telefono;}

public setDireccion(direccion: string): void {
    this.direccion = direccion;
}

}
