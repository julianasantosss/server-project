export function listUsers() {
  
    fetch("http://localhost:3000/users")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();   
        })
        .then(users => {
            // Formatear los usuarios como cadenas de texto para imprimirlos
            const formattedUsers = users.map(user =>
                `{\n  id: ${user.id},\n  first_name: '${user.first_name}',\n  last_name: '${user.last_name}',\n  email: '${user.email}'\n}`
            ).join(',\n');
            //imprimimos los datos en cadenas de texto:
            console.log(`[\n${formattedUsers}\n]`);
        })     
} 
 
 
