export async function addUser(first_name, last_name, email) {
      // Paso 1: Obtener todos los usuarios
      const response = await fetch("http://localhost:3000/users");
      const users = await response.json();
      
      // Encontrar el ID máximo y asignar el siguiente ID
      const maxId = users.length > 0 ? Math.max(...users.map(user => user.id)) : 0;
      const newId = maxId + 1;

      // Paso 2: Crear el nuevo usuario
      const newUser = {
          id: newId.toString(),
          first_name: first_name,
          last_name: last_name,
          email: email
      };

      // Enviar el nuevo usuario al servidor
      await fetch("http://localhost:3000/users", {
          method: "POST",
          body: JSON.stringify(newUser),
          headers: {
              "Content-Type": "application/json; charset=UTF-8"
          }
      });

      // Paso 3: Mostrar el nuevo usuario
      console.log(`{\n  id: ${newUser.id},\n  first_name: '${newUser.first_name}',\n  last_name: '${newUser.last_name}',\n  email: '${newUser.email}'\n}`);
  
}


 