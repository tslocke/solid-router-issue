import { test, expect } from "vitest"
import { Route, useParams } from "@solidjs/router"
import { render, screen } from '@solidjs/testing-library'

test('render location', async () => {
  render(() => <Route path='/foo' component={() => <p>foo</p>}/>, {location: '/foo'})
  expect(await screen.findByText('foo')).toBeTruthy()
})

const App = () => (
  <>
    <Route path="/ids/:id" component={() => <p>Id: {useParams()?.id}</p>} />
    <Route path="/" component={() => <p>Start</p>} />
  </>
);

test("can render a route with the id", async () => {
  const { findByText } = render(() => <App />, { location: "/ids/1234" });
  expect(await findByText("Id: 1234")).not.toBeFalsy();
});
