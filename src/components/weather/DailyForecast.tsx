import { Sun } from "lucide-react";

const DailyForecast = () => {
  return (
    <section className="bg-neutral-300 rounded-2xl text-center mt-3">
      <table className="w-full"></table>
      <thead>
        <tr>
          <th className="py-4 px-6 text-left font-bold text-gray-900" colSpan={4}>
            7-day forecast
          </th>
        </tr>
      </thead>

      <tbody className="[&_td]:p-2 text-foreground divide-y divide-border">
        <tr>
          <td className="font-semibold">Mon</td>
          <td>
            <Sun className="size-5" />
          </td>
          <td className="text-gray-500">24°</td>
          <td className="text-gray-500">33°</td>
        </tr>
        <tr>
          <td className="font-semibold">Mon</td>
          <td>
            <Sun className="size-5" />
          </td>
          <td className="text-gray-500">24°</td>
          <td className="text-gray-500">33°</td>
        </tr>
        <tr>
          <td className="font-semibold">Mon</td>
          <td>
            <Sun className="size-5" />
          </td>
          <td className="text-gray-500">24°</td>
          <td className="text-gray-500">33°</td>
        </tr>
        <tr>
          <td className="font-semibold">Mon</td>
          <td>
            <Sun className="size-5" />
          </td>
          <td className="text-gray-500">24°</td>
          <td className="text-gray-500">33°</td>
        </tr>
      </tbody>
    </section>
  );
};

export default DailyForecast;
