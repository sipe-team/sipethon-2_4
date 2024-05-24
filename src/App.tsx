import Factory from './components/Factory/Factory';
import AppLayout from './components/ui/layout/AppLayout';

function App() {
  return (
    <AppLayout header={<div>Header Content</div>} footer={<div>Footer Content</div>}>
      <Factory />
    </AppLayout>
  );
}

export default App;
