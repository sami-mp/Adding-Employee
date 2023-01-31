<?php
    header("Content-Type: application/json; charset=UTF-8");

    $servername = "localhost";

    $database = "employee data";

    $username = "root";

    $password = "";

    $con = mysqli_connect($servername, $username, $password, $database);

    if (!$con)
    {
        die('Could not connect: ' . mysqli_error());
    }

    http_response_code(200);

  $decode = json_decode($_GET['myData'],true);

    $sql="INSERT INTO employee (fname, lname, employeeid, hiredate, department )
     VALUES
    ('$decode[fname]','$decode[lname]','$decode[employeeId]','$decode[hireDate]',
    
    '$decode[department]')";

    mysqli_query($con,$sql);
    
    $sql2="Select count(id) from employee";

    if ($result = mysqli_query($con,$sql2))
    {
        $row = mysqli_fetch_row($result);

        echo json_encode($row);      
    }
    else
    {
        die('Error: ' . mysqli_error($con));
    }

    mysqli_close($con)
    
?>