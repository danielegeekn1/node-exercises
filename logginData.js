const surprisingFact = "The bumblebee bat is the world's smallest mammal";
console.log(surprisingFact);
console.error(surprisingFact);

const familyTree = [
  {
    name: "Person 1",
    children: [
      {
        name: "Person 2",
        children: [
          {
            name: "Person 3",
            children: [
              {
                name: "Person 4",
              },
            ],
          },
        ],
      },
    ],
  },
];

console.dir(familyTree, { depth: null });
console.table(familyTree);

function importantTask() {
  console.count("importantTaskCalls");
}

importantTask();
importantTask();
importantTask();
importantTask();
console.countReset("importantTaskCalls");
importantTask();
importantTask();
