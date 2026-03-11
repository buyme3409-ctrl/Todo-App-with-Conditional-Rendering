import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TodoCard from "../components/TodoCard";
import { TodoContext } from "../contexts/TodoContext";

export default function Home() {
    const todos = useContext(TodoContext).todos;
    return (
        <Container>
            <h1 className="my-3">Your todos</h1>
            <Row>
                <CardGrp todos={todos} />
            </Row>
        </Container>
    );
}

function CardGrp({ todos }) {
    return todos.map((todo) => {
        return (
            <Col md={4} key={todo.id}>
                <TodoCard todo={todo} />
            </Col>
        );

    });
}