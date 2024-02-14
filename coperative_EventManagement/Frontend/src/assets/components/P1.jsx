import { PieChart } from '@mui/x-charts';

export default function TPieChart() {
  return (
<PieChart
          series={[
            { data: [{ value: 10, color: 'orange',label:"A" }, { value: 15 ,label:"B"}, { value: 20 ,label:"C"}] },
          ]}
          height={300}
        />
  );
}