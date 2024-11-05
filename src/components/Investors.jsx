import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Investors = () => {
    const [investors, setInvestors] = useState([]);
    const [message, setMessage] = useState("");
    const [searchParam, setSearchParam] = useState({
        year: "",
        quarter: ""
    });
    const [result, setResult] = useState([]);
    const [quarters, setQuarters] = useState([1,2,3,4]);

    useEffect(() => {
        axios.get("http://localhost:5000/table")
            .then(result => {
              //  console.log(result.data);
                setInvestors(result.data);
            })
            .catch(error => {
                setMessage("Something went wrong");
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchParam({
            ...searchParam,
            [name]: value
        });
    };

    const handleSearch = () => {
        if (searchParam.year !== "" && searchParam.quarter !=="") {
            const search = investors.filter((iv) => iv.year == searchParam.year)
            .map(data => data.data)[0].filter(ft => ft.quarter == searchParam.quarter)
            .map(rows => rows.rows)
            setResult(search);
            console.log(result)
        } else {
            alert("Please selct Quarter and financial year")
        }
    }

    return investors.length > 0 ? (
        <div className='container '>
            <div className="row justify-content-center align-items-center border border-2 border-primary p-2">
            <div className='col-md-4'>
                <div>Quarter</div>
                    <select name="quarter" onChange={handleChange} className='form-select'>
                        <option value="">Choose...</option>
                        {quarters.map((q, index) => (
                            <option key={index} value={q}>Quarter {q}</option>
                        ))}
                    </select>
                </div>
                <div className='col-md-4'>
                    <div> Financial Year</div>
                    <select name="year" onChange={handleChange} className='form-select'>
                        <option value="">Choose...</option>
                        {investors.map((investor, index) => (
                            <option key={index} value={investor.year}>FY {investor.year}</option>
                        ))}
                    </select>
                </div>

               
                <div className='col-md-2 '>
                    <input type="submit" value="Search" onClick={handleSearch} className='bg-primary text-white border-0 px-4 py-2 mt-4 rounded'/>
                </div>
            </div>
        {
            result.length > 0 && 
            <table className='table'>
                <thead className='thead-dark text-white' > 
                    <tr> 
                        <th scope='col'> Q{searchParam.quarter} Results</th>
                        <th scope='col'>Q{searchParam.year} Year </th>
                        <th scope='col'>Growth </th>
                        <th scope="col"></th>
                    </tr>
                    <tr> 
                        <th scope="col"> </th>
                        <th scope='col'> $m</th>
                        <th scope='col'> $% </th>
                        <th scope='col'>CER% </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        result[0].map((r, index) => (
                            <tr key={`${r.title}-${index}`}>
                                <td> <b> {r.title} </b></td>
                                <td> {r.million}</td>
                                <td> {r.growthPercentage}</td>
                                <td> {r.cer}</td>
                            </tr>
                        ))
                    }
                    <tr></tr>
                </tbody>
            </table>
}
        </div>
    ) : <div>{message || "Something went wrong"}</div>;
};

export default Investors;
