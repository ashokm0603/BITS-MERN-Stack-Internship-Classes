import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function DumiProducts() {
  let products = [
     {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzEHRe6qwUg__61qgldYKbyvMS6yhDdyTHLQ&s",
      title: "Cloths",
    },
    {
        imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFHqubsxgEDlbHQy-DqJ7gpEX8Honnsv9cQ&s",
        title:'laptops'
    },
    {
        imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu40lyAEF3ePk1CS3swYqngcJIBufVRo1ouA&s",
        title:'Mobiles'
    },
    {
        imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcEnHaxGDq08atEEjHNYlHsfEeHXzVw2zeOQ&s",
        title:"Shoes"
    }
  ];

  return (
    <Row xs={1} md={4} className="g-4">
      {products.map((item, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={item.imageSrc} height="290px" width="190px" />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <button className="btn btn-warning">Add To card</button>
              <button className="btn btn-success mx-2">Buy</button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default DumiProducts;
