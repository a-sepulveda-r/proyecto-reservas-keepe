import React from 'react';
import Button from 'react-bootstrap/Button';


const styles = {
  desactivado: {
    color: "grey", backgroundColor: 'black',
    fontWeight: 700,
    fontSize: 20,
    borderColor: 'black',
    borderRadius: 10,
    fontFamily: 'Quicksand',
    border: 2.74627,
    borderColor: '#5B5858',
    width: 110,
  },

  activado: {
    color: "white", backgroundColor: '#9B8B8B',
    fontWeight: 700,
    fontSize: 20,
    borderColor: '#9B8B8B',
    borderRadius: 10,
    fontFamily: 'Quicksand',
    border: 2.74627,
    borderColor: '#5B5858',
    width: 110,
  }
};


const ReservaTuHora = () => {
    return (
  <table class="table table-dark table-hover">
    <thead>
      <tr>
        <th scope="col">Lunes</th>
        <th scope="col">Martes</th>
        <th scope="col">Miércoles</th>
        <th scope="col">Jueves</th>
        <th scope="col">Viernes</th>
        <th scope="col">Sábado</th>
        <th scope="col">Domingo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"><Button variant="primary" disabled style={styles.desactivado}
      
      
      >08-09AM</Button>{' '}</th>
        <td><Button variant="dark" style={styles.activado}>08-09AM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>08-09AM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>08-09AM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>08-09AM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>08-09AM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>08-09AM</Button>{' '}</td>
      </tr>
      <tr>
      <th scope="row"><Button variant="primary" disabled style={styles.desactivado}>09-10AM</Button>{' '}</th>
        <td><Button variant="light" style={styles.activado}>09-10AM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>09-10AM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>09-10AM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>09-10AM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>09-10AM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>09-10AM</Button>{' '}</td>
      </tr>
      <tr>
      <th scope="row"><Button variant="primary" disabled style={styles.desactivado}>10-11AM</Button>{' '}</th>
        <td><Button variant="light" style={styles.activado}>10-11AM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>10-11AM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>10-11AM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>10-11AM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>10-11AM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>10-11AM</Button>{' '}</td>
      </tr>
      <tr>
      <th scope="row"><Button variant="primary" disabled style={styles.desactivado}>11-12AM</Button>{' '}</th>
        <td><Button variant="light" style={styles.activado}>11-12AM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>11-12AM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>11-12AM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>11-12AM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>11-12AM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>11-12AM</Button>{' '}</td>
      </tr>
      <tr>
      <th scope="row"><Button variant="primary" disabled style={styles.desactivado}>12-13PM</Button>{' '}</th>
        <td><Button variant="light" style={styles.activado}>12-13PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>12-13PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>12-13PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>12-13PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>12-13PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>12-13PM</Button>{' '}</td>
      </tr>
      <tr>
      <th scope="row"><Button variant="primary" disabled style={styles.desactivado}>13-14PM</Button>{' '}</th>
        <td><Button variant="light" style={styles.activado}>13-14PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>13-14PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>13-14PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>13-14PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>13-14PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>13-14PM</Button>{' '}</td>
      </tr>
      <tr>
      <th scope="row"><Button variant="primary" disabled style={styles.desactivado}>14-15PM</Button>{' '}</th>
        <td><Button variant="light" style={styles.activado}>14-15PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>14-15PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>14-15PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>14-15PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>14-15PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>14-15PM</Button>{' '}</td>
      </tr>
      <tr>
      <th scope="row"><Button variant="primary" disabled style={styles.desactivado}>15-16PM</Button>{' '}</th>
        <td><Button variant="light" style={styles.activado}>15-16PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>15-16PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>15-16PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>15-16PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>15-16PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>15-16PM</Button>{' '}</td>
      </tr>
      <tr>
      <th scope="row"><Button variant="primary" disabled style={styles.desactivado}>16-17PM</Button>{' '}</th>
        <td><Button variant="light" style={styles.activado}>16-17PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>16-17PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>16-17PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>16-17PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>16-17PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>16-17PM</Button>{' '}</td>
      </tr>
      <tr>
      <th scope="row"><Button variant="primary" disabled style={styles.desactivado}>17-18PM</Button>{' '}</th>
        <td><Button variant="light" style={styles.activado}>17-18PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>17-18PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>17-18PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>17-18PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>17-18PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>17-18PM</Button>{' '}</td>
      </tr>
      <tr>
      <th scope="row"><Button variant="primary" disabled style={styles.desactivado}>18-19PM</Button>{' '}</th>
        <td><Button variant="light" style={styles.activado}>18-19PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>18-19PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>18-19PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>18-19PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>18-19PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>18-19PM</Button>{' '}</td>
      </tr>
      <tr>
      <th scope="row"><Button variant="primary" disabled style={styles.desactivado}>19-20PM</Button>{' '}</th>
        <td><Button variant="light" style={styles.activado}>19-20PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>19-20PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>19-20PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>19-20PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>19-20PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>19-20PM</Button>{' '}</td>
      </tr>
      <tr>
      <th scope="row"><Button variant="primary" disabled style={styles.desactivado}>20-21PM</Button>{' '}</th>
        <td><Button variant="light" style={styles.activado}>20-21PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>20-21PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>20-21PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>20-21PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>20-21PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>20-21PM</Button>{' '}</td>
      </tr>
      <tr>
      <th scope="row"><Button variant="primary" disabled style={styles.desactivado}>21-22PM</Button>{' '}</th>
        <td><Button variant="light" style={styles.activado}>21-22PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>21-22PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>21-22PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>21-22PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>21-22PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>21-22PM</Button>{' '}</td>
      </tr>
      <tr>
      <th scope="row"><Button variant="primary" disabled style={styles.desactivado}>22-23PM</Button>{' '}</th>
        <td><Button variant="light" style={styles.activado}>22-23PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>22-23PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>22-23PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>22-23PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>22-23PM</Button>{' '}</td>
        <td><Button variant="light" style={styles.activado}>22-23PM</Button>{' '}</td>
      </tr>
      
      
      
    </tbody>
  </table>
    )
    }
  
  export default ReservaTuHora;