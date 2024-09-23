import React from 'react';
import virat from '/virat.png';
import harshal from '/harshal.png';

function TopPerformers() {
    const orangeCapHolder = {
        name: "Virat Kohli",
        runs: 600,
        matches: 14,
        avg: 50.00,
        strikeRate: 140.00,
        image: virat,
    };

    const purpleCapHolder = {
        name: "Harshal Patel",
        wickets: 30,
        matches: 14,
        avg: 18.00,
        economy: 7.50,
        image: harshal,
    };

    return (
        <div className="p-6 rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-8 italic">Top Performers</h2>
            <div className="flex justify-around items-center">
                {/* Orange Cap Holder */}
                <div className="flex flex-col items-center text-white">
                    <div className="flex items-center mb-2">
                        <img src={orangeCapHolder.image} alt={orangeCapHolder.name} className="w-60 h-60" />
                        <div className="ml-3">
                            <p className="text-orange-500 underline mb-5 border-orange-500 font-medium text-sm">Orange Cap</p>
                            <h3 className="text-xl font-semibold text-gray-200">VIRAT</h3>
                            <h6 className='text-3xl font-medium'>KOHLI</h6>
                            <div className='mt-5'>
                                <div className="italic text-xl text-black">Statistics</div>
                                <table className="min-w-full bg-white italic border border-gray-300 rounded-lg shadow-md mt-3">
                                    <thead>
                                        <tr className="bg-indigo-700 text-white">
                                            <th className="p-2">M</th>
                                            <th className="p-2">HS</th>
                                            <th className="p-2">RUNS</th>
                                            <th className="p-2">SR</th>
                                            <th className="p-2">4s/6s</th>
                                            <th className="p-2">50/100</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="text-center bg-indigo-700 text-black">
                                            <td className="p-2 font-medium">10</td>
                                            <td className="p-2 font-medium">102*</td>
                                            <td className="p-2 font-medium">605</td>
                                            <td className="p-2 font-medium">140.60</td>
                                            <td className="p-2 font-medium">50/30</td>
                                            <td className="p-2 font-medium">4/2</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Purple Cap Holder */}
                <div className="flex flex-col items-center text-white">
                    <div className="flex items-center mb-2">
                        <img src={purpleCapHolder.image} alt={purpleCapHolder.name} className="w-60 h-60" />
                        <div className="ml-3">
                            <p className="text-violet-500 underline mb-5 border-orange-500 font-medium text-sm">Purpal Cap</p>
                            <h3 className="text-xl font-semibold text-gray-200">HARSHAL</h3>
                            <h6 className='text-3xl font-medium'>PATEL</h6>
                            <div className='mt-5'>
                                <div className="italic text-xl text-black">Statistics</div>
                                <table className="min-w-full bg-white italic border border-gray-300 rounded-lg shadow-md mt-3">
                                    <thead>
                                        <tr className="bg-indigo-700 text-white">
                                            <th className="p-2">M</th>
                                            <th className="p-2">BEST</th>
                                            <th className="p-2">WK</th>
                                            <th className="p-2">ECO</th>
                                            <th className="p-2">SR</th>
                                            <th className="p-2">4W/5W</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="text-center bg-indigo-700 text-black">
                                            <td className="p-2 font-medium">10</td>
                                            <td className="p-2 font-medium">4/10</td>
                                            <td className="p-2 font-medium">19</td>
                                            <td className="p-2 font-medium">9.5</td>
                                            <td className="p-2 font-medium">33.2</td>
                                            <td className="p-2 font-medium">2/0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopPerformers;
