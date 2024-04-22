export const formatearCantidad =(cantidd)=>{
    return Number(cantidd).toLocaleString('es-US', {
        style:'currency',
        currency: 'USD'
    })
}