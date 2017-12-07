import React from 'react'
import Table from './../../components/table/Table.jsx'
import Cell from './../../components/table/cell/Cell.jsx'
import renderer from 'react-test-renderer'
import assert from "assert"


describe("Table component", function(){

  beforeEach(() => {

  })

  it('renders correctly', () => {
    const tree = renderer
      .create(<Table primeNumberCount={5}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can generate table", () => {
    let table = new Table({primeNumberCount: 2})
    let expected = [
      <div key={0} className="row">
        <Cell key={"_"} value={"_"}/>
        <Cell key={2} value={2}/>
        <Cell key={3} value={3}/>
      </div>,

      <div key={1} className="row">
        <Cell key={2} value={2}/>
        <Cell key={4} value={4}/>
        <Cell key={6} value={6}/>
      </div>,

      <div key={2} className="row">
        <Cell key={3} value={3}/>
        <Cell key={6} value={6}/>
        <Cell key={9} value={9}/>
      </div>
    ]
    let result = table.buildTable()
    assert.deepEqual(result, expected)
  })
})
