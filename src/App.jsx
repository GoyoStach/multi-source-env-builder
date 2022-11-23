const App = () => {
  const envs = import.meta.env;
  console.warn({ envs });
  console.log(import.meta.env.ENV_VAR_1);
  return <pre>{JSON.stringify(envs, null, 2)}</pre>;
};

export default App;
