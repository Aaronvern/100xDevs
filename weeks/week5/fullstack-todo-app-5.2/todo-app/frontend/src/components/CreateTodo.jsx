export function CreateTodo() {
    const handleAddTodo = () => {
        fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
                title: document.getElementById("title").value,
                description: document.getElementById("description").value
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            if (response.ok) {
                alert("Todo added successfully");
            } else {
                throw new Error("Failed to add todo");
            }
        })
        .catch(error => {
            console.error('Error adding todo:', error);
            alert("Error adding todo");
        });
    };

    return (
        <div>
            <input type="text" placeholder="enter todo title" style={{
                margin: 10,
                padding: 10,
            }} id="title" /><br />
            <input type="text" placeholder="enter todo description" style={{
                margin: 10,
                padding: 10,
            }} id="description" /><br />
            <button style={{
                margin: 10,
                padding: 10,
            }} onClick={handleAddTodo}>add todo</button>
        </div>
    );
}
