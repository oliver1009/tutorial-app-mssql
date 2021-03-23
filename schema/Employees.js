cube(`Employees`, {
  sql: `SELECT * FROM dbo."Employees"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [empname]
    }
  },
  
  dimensions: {
    empname: {
      sql: `${CUBE}."EmpName"`,
      type: `string`
    },
    
    department: {
      sql: `${CUBE}."Department"`,
      type: `string`
    },
    
    salary: {
      sql: `${CUBE}."Salary"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
