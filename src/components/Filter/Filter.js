import React, { useEffect, useState } from 'react'

const Filter = () => {
  
    const buttons = document.querySelectorAll('.Button--outlined');
    const panels = document.querySelectorAll('.Panel');
    const keyWords2Filter = ['c', 'a'];
    
    const [categories, setCategories] = useState({ data:[], loading:true, error:null });
    

    const startLoadFilter = () => {
        try {
            setCategories({ ...categories, loading:true });
            keyWords2Filter.map(async(keyWord) => {
                const body = await fetch(`https://themealdb.com/api/json/v1/1/list.php?${keyWord}=list`, {
                    'Content-Type': 'application/json'
                });
                const data = await body.json();
                const { meals } = data;
                setCategories({...categories, data:meals, loading:false});
            })
        } catch (error) {
            setCategories({loading:true, error:error});   
        }   
    }
    
    const onHandleClick = () => {
        buttons.forEach((button, i) => {
            buttons[i].addEventListener('click', () => {
                panels.forEach((panel, index) => {
                    panels[index].classList.remove('active');
                })
                panels[i].classList.add('active');
            })
        })
    }

    useEffect(() => {
        (async() => {
            await startLoadFilter()
        })()
    }, [])
    

    return (
        <aside className="Aside">
            {['Category','Area'].map(item => (
                <section 
                    className="Section"
                    key={item}
                >
                    <button 
                        className="Button Button--outlined"
                        onClick={onHandleClick}
                    >
                        {item}
                    </button>
                    <div 
                        className="Panel active"
                    >
                        {categories.data.map(category => 
                            <div>
                                <input type="checkbox" id="scales" name="scales" />
                                <label htmlFor="scales"></label>
                            </div>
                        )}
                    </div>
                </section>
            ))}
        </aside>
    );
};

export default Filter;
