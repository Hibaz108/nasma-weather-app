import { Sun } from "lucide-react";

const DailyForecast = () => {
  return (
    <section className="bg-neutral-300 rounded-2xl text-center mt-3">
      <table className="w-full">
        <thead>
          <tr>
            <th
              className="py-4 px-6 text-left font-bold text-gray-900"
              colSpan={4}
            >
              7-day forecast
            </th>
          </tr>
        </thead>

        <tbody className="[&_td]:p-2 divide-y divide-gray-400">
          <tr>
            <td className="font-semibold">Mon</td>
            <td className="flex justify-center items-center">
              <Sun className="size-5" />
            </td>
            <td className="text-gray-500">24°</td>
            <td className="text-gray-500">33°</td>
          </tr>
          <tr>
            <td className="font-semibold">Mon</td>
            <td className="flex justify-center items-center">
              <Sun className="size-5" />
            </td>
            <td className="text-gray-500">24°</td>
            <td className="text-gray-500">33°</td>
          </tr>
          <tr>
            <td className="font-semibold">Mon</td>
            <td className="flex justify-center items-center">
              <Sun className="size-5" />
            </td>
            <td className="text-gray-500">24°</td>
            <td className="text-gray-500">33°</td>
          </tr>
          <tr>
            <td className="font-semibold">Mon</td>
            <td className="flex justify-center items-center">
              <Sun className="size-5" />
            </td>
            <td className="text-gray-500">24°</td>
            <td className="text-gray-500">33°</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default DailyForecast;
