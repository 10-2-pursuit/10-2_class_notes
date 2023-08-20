export default function Table() {
  // <!-- ************************** -->
  // <!-- Best Sellers table -->
  // <!-- set class display-5 on h3 -->
  // <!-- Set classes table table-striped table-hover text-center on table -->
  // <!-- ************************** -->
  return (
    <>
      <h3 className="">Best Sellers</h3>
      <table className="">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Type</th>
            <th scope="col">Hardiness Zone(s)</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Russet</td>
            <td>3-10</td>
            <td>$120</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Peach</td>
            <td>4-7</td>
            <td>$80</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Orange</td>
            <td>3-9</td>
            <td>$10</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Yellow</td>
            <td>5-9</td>
            <td>$50</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Lavender</td>
            <td>2-7</td>
            <td>$200</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
