const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];
  const getName=({name})=>name;
  console.log(scores.map(getName));

  console.log(scores.filter((ele)=>ele.marks>=40));
  
  console.log(scores.filter((ele)=>ele.marks<40).map((name)=>name.name));
  
  console.log(scores.filter((ele)=>ele.marks>90).map((ele)=>ele.name));