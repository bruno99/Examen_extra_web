import React, {FC, useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";
import "./Comp.css";

interface Ifila {
    cantidad: string; 
    nombre: string;
    proyecto: string;
    vencimiento: Date;

}

const Comp: FC = () => {
    var[datos, setData] = useState<any>([
        {cantidad: 5000, nombre: "Bruno", proyecto: "Viajes espaciales"},
        {cantidad: 2000, nombre: "Alberto", proyecto: "Profesor"},
        {cantidad: 3000, nombre: "Bru", proyecto: "Marketing"},
    ]);
    
    const [aux1, setAux1] = useState<boolean>(false);
    const [aux2, setAux2] = useState<boolean>(false);
    const [aux3, setAux3] = useState<boolean>(false);
    const [indexAux, setIndexAux] = useState<number>(-1);
    const [cant, setCant] = useState<string>("");
    const [nomb, setNomb] = useState<string>("");
    const [pro, setPro] = useState<string>("");
    const [ven, setVen] = useState<string>("");
    const [startDate, setStartDate] = useState(new Date());
    var datosAux = [];

    function add(cant: string, nomb: string, pro: string, ven: string){
        datosAux = datos;
        datosAux.push({ cantidad: cant, nombre: nomb, proyecto: pro, vencimiento: ven});
        setData(datosAux);
    }
    function erase(index: number){
        datosAux = datos;
        datosAux.splice(index, 1);
        setData(datosAux);
    }
    function edit(cant: string, nomb: string, pro: string, ven: string, index: number){
        datosAux = datos;
        datosAux.splice(index, 1, {cantidad: cant, nombre: nomb, proyecto: pro, vencimiento: ven});
        setData(datosAux);
    }
    
    console.log(datos);
    return (
        <div id="container">
            <div id="firstfila">
                <div className="n">Cantidad(€)</div>
                <div className="n">Nombre</div>
                <div className="n">Proyecto</div>
                <div className="n">Vencimiento</div>
            </div>

            <div id="result">
                {datos && (
                    <div>
                        {datos.map((fila: Ifila, index: number)=> (
                            <div className="fila">
                                <div className="fi">{fila.cantidad}</div>
                                <div className="fi">{fila.nombre}</div>
                                <div className="fi">
                                    <DropdownList
                                       defaultValue={fila.proyecto}
                                       data={[
                                           "Viajes espaciaales",
                                           "Profesor",
                                           "Marketing",
                                       ]}
                                       />
                                </div>
                                <div className="fi">
                                    <DatePicker
                                       onChange={setStartDate}
                                       value={startDate}/>
                                </div>
                                <button
                                   onClick={(e) =>{
                                       erase(index);
                                       setAux2(!aux2);
                                   }}
                                   >Borrar</button>
                                <button
                                  onClick={(e)=>{
                                      setAux3(true);
                                      setIndexAux(index);
                                  }}   
                                  >Editar</button>
                                  </div>
                        ))}
                        </div>
                )}
            </div>
            {aux1 && (
                <div className="fila">
                <input
                       type="string"
                       placeholder="cantidad(€)"
                       value={cant}
                       onChange={(e)=>{
                           setCant(e.target.value);
                       }}
                       />
                    <input
                       type="text"
                       placeholder="nombre"
                       value={nomb}
                       onChange={(e)=>{
                           setNomb(e.target.value);
                       }}
                       />
                       <input
                          type="text"
                          placeholder= "proyecto"
                          value={pro}
                          onChange={(e)=>{
                              setPro(e.target.value);
                          }}
                          />
                       <input
                          type="text"
                          placeholder= "XX/XX/XXX"
                          value={ven}
                          onChange={(e)=>{
                              setVen(e.target.value);
                          }}
                          />
                          
                </div>
            )}
            {aux1 && (
                <div>
                    <button 
                       onClick={(e)=>{
                           add(cant, nomb, pro, ven);
                           setAux1(false);
                           setCant("");
                           setNomb("");
                           setPro("");
                           setVen("");
                       }}
                       >Añadir</button>
                       </div>
            )}
            <div id="botones">
                {!aux1 && (
                    <button 
                       onClick={(e) => {
                           setAux1(true);
                       }}
                       >Añadir contabilidad</button>
                )}
            </div>
            {aux3 && (
                <div className="fila">
                 <input
                       type="number"
                       placeholder="cantidad"
                       value={cant}
                       onChange={(e) => {
                           setCant(e.target.value);
                       }}
                       />
                    <input
                       type="text"
                       placeholder="nombre"
                       value={nomb}
                       onChange={(e) => {
                           setNomb(e.target.value);
                       }}
                       />
                    <input
                       type="text"
                       placeholder="proyecto"
                       value={pro}
                       onChange={(e) => {
                           setPro(e.target.value);
                       }}
                       />
                      <input
                       type="text"
                       placeholder="vencimiento"
                       value={ven}
                       onChange={(e) => {
                           setVen(e.target.value);
                       }}
                       />
                       </div>
            )}
            <div id="botones">
                {aux3 && (
                    <button 
                       onClick={(e)=>{
                           edit(cant, nomb, pro, ven, indexAux);
                           setAux3(false);
                           setCant("");
                           setNomb("");
                           setPro("");
                           setVen("");
                       }}
                       >Editar contabilidad</button>
                )}
            </div>
        </div>
    );
};
export default Comp;
