<Col key={item.id} sm={12} md={6} lg={4}
className="mb-4">
  {
    item.vegano ?
    <Card
      className={`rounded-0`}
      bg="dark"
      text="white">
      <Card.Img
        variant="top"
        src={img}
        alt={item.nome}
        className={`rounded-0`}
      />
      <Card.Body>
        <Card.Title>{item.nome}</Card.Title>
        <Card.Text className="text-light">{item.descricao}</Card.Text>
        <Card.Text className="font-weight-bold">R${item.preco}</Card.Text>
        {item.vegano && (
          <Card.Text className="text-success font-weight-bold">Vegano</Card.Text>
        )}
      </Card.Body>
    </Card>
    : null
  }
</Col>

//Define o estado de tipo

//Se o tipo for vazio, printa todos. Se for diferente de vazio verifica o tipo e exibe de acordo com o tipo recebido

//alterar vegan true para tipo: vegano, etc.