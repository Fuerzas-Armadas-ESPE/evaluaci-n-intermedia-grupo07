import React from 'react' 
function Productos() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, [])
  async function getProducts() {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .limit(10)
      if (error) throw error;
      if (data != null) {
        setProducts(data); // [product1,product2,product3]
      }
    } catch (error) {
      alert(error.message);
    }
  }
  function printProductData() {
    // Abre una ventana de impresión y muestra la información de los productos
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Informe de Tareas</title>');
    printWindow.document.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">');
    printWindow.document.write('</head><body>');

    printWindow.document.write('<div class="container">');
    printWindow.document.write('<h2 class="mt-3">Informe de Tareas</h2>');

    printWindow.document.write('<table class="table mt-3">');
    printWindow.document.write('<thead class="thead-dark"><tr><th>Nombre de la Tarea</th><th>Descripción</th></tr></thead><tbody>');

    products.forEach((product) => {
      printWindow.document.write(`<tr><td>${product.name}</td><td>${product.description}</td></tr>`);
    });

    printWindow.document.write('</tbody></table>');
    printWindow.document.write('</div>');
 
    // Pie de página con la fecha
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('es-ES');
    printWindow.document.write(`<footer class="fixed-bottom bg-light p-2 text-center">Fecha del Informe: ${formattedDate}</footer>`);

    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  }
  return (
    <div>
    <Button variant="info" onClick={() => printProductData()}>Reporte</Button>
      </div>
  )
}

export default Productos