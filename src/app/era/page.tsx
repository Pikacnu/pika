'use client';

import { Era, Timeline } from '../../../public/era';
import { Sidelist } from '../../../public/sidelist';
import { useState } from 'react';

interface List {
	dataname?: string;
	data: Era[];
}

export default function Era() {
	const era: List[] = [
		{
			dataname: '綜合史',
			data: [
				{
					eraname: '東亞近代史',
					describe: '',
					thing: [
						{
							date: new Date('1966'),
							thing: '文化大革命',
							other: [
								'組織紅衛兵(學生)',
								'口號:破四舊，立四新；',
								'革命無罪造反有理',
								'也稱為(十年浩劫)',
							],
						},
						{
							date: new Date('1967'),
							thing: '東南亞國協成立',
							other: ['(曼谷)'],
						},
						{
							date: new Date('1969'),
							thing: '中蘇關西降至冰點',
							other: ['(邊境問題)'],
						},
						{
							date: new Date('1972'),
							thing: '中美 關西正常化',
							other: ['尼克森訪問北京森'],
						},
						{ date: new Date('1973'), thing: '美國從越南撤軍' },
						{
							date: new Date('1975'),
							thing: '越南統一',
							other: ['北越(共產)統一越南', '越戰結束'],
						},
						{
							date: new Date('1976'),
							thing: '毛澤東',
							other: ['四人幫失勢', '(王洪文、張春橋、江青、姚文元)'],
						},
						{
							date: new Date('1977'),
							thing: '東約解散',
							other: ['因東南亞大多為第三世界國家', '成效有限'],
						},
						{
							date: new Date('1978'),
							thing: '中國改革開放',
							other: [
								'鄧小平推動',
								'口號:對內改革，對外開放',
								'(廢人民公社、設經濟特區',
								'整頓國營企業)',
								'(開放經濟，政治保守)',
							],
						},
						{
							date: new Date('1980'),
							thing: '成立經濟特區',
							other: ['深圳、珠海、汕頭、廈門、海南'],
						},
						{
							date: new Date('1989'),
							thing: '六四天安門事件',
							other: [
								'學生為弔念胡耀邦逝世並追求政治改革',
								'集結於 北京-天安門 廣場前',
								'中共後以武力鎮壓',
								'國際施予經濟制裁',
							],
						},
						{
							date: new Date('1989'),
							thing: '中蘇關西正常化',
							other: ['戈巴契夫訪中'],
						},
						{
							date: new Date('1990'),
							thing: '蘇聯解體',
							other: ['(戈巴契夫請辭)', '鄧小平感受到壓力(P=F/A)'],
						},
						{ date: new Date('1990'), thing: '南巡講話', other: ['鼓勵經濟'] },
						{ date: new Date('1994'), thing: '李登輝推出新南向政策' },
						{ date: new Date('1997'), thing: '歸還香港', other: ['英國'] },
						{ date: new Date('1999'), thing: '歸還澳門', other: ['葡萄牙'] },
					],
				},
			],
		},
		{
			dataname: 'WW1-WW2',
			data: [
				{
					eraname: '一戰',
					describe: '',
					thing: [
						{
							date: new Date('1914'),
							thing: '一戰爆發',
							other: ['奧匈王儲遇害(賽拉耶佛)'],
						},
						{ date: new Date('1915'), thing: '日提21條' },
						{ date: new Date('1915'), thing: '新文化運動', other: ['陳獨秀'] },
						{ date: new Date('1917'), thing: '二月革命', other: ['推翻沙皇'] },
						{
							date: new Date('1917'),
							thing: '十月革命',
							other: ['推翻臨時政府', '列寧上台', '退出一戰', '美國加入'],
						},
						{ date: new Date('1919'), thing: '一戰結束' },
					],
				},
				{
					eraname: '戰間期',
					describe: '',
					thing: [
						{
							date: new Date('1919'),
							thing: '巴黎和會',
							other: ['凡爾賽條約&民族自決'],
						},
						{ date: new Date('1919'), thing: '54運動', other: ['山東問題'] },
						{
							date: new Date('1920'),
							thing: '國際聯盟成立',
							other: ['美國未參加(孤立主義)', '威爾遜14點和平原則'],
						},
						{
							date: new Date('1922'),
							thing: '墨索里尼取得義大利統治權',
							other: ['法西斯黨', '極權'],
						},
						{
							date: new Date('1928'),
							thing: '史達林推動計畫經濟',
							other: ['發展國防工業'],
						},
						{
							date: new Date('1929'),
							thing: '經濟大恐慌',
							other: ['紐約股市狂跌', '羅斯福新政', '(發展基礎建設)'],
						},
						{
							date: new Date('1933'),
							thing: '希特勒當選德國總理',
							other: ['納粹黨', '反共、反猶', '毀凡爾賽條約'],
						},
						{
							date: new Date('1938'),
							thing: '德國併吞蘇台德地區',
							other: ['英、法行姑息政策', '慕尼黑協定'],
						},
						{ date: new Date('1939'), thing: '蘇德不侵犯條約' },
					],
				},
				{
					eraname: '二戰',
					describe: '',
					thing: [
						{
							date: new Date('1939'),
							thing: '二戰爆發',
							other: ['德侵波蘭', '與蘇瓜分'],
						},
						{
							date: new Date('1941'),
							thing: '德侵蘇聯',
							other: ['毀蘇德不侵犯條約'],
						},
						{
							date: new Date('1941'),
							thing: '珍珠港事件',
							other: ['日侵美珍珠港', '美國加入戰局'],
						},
						{ date: new Date('1943'), thing: '義大利投降' },
						{ date: new Date('1943'), thing: '盟軍反擊' },
						{ date: new Date('1944'), thing: '諾曼地登陸' },
						{ date: new Date('1945'), thing: '雅爾達會議' },
						{
							date: new Date('1945'),
							thing: '德國投降',
							other: ['希特勒自殺'],
						},
						{
							date: new Date('1945'),
							thing: '日軍投降',
							other: ['空降原子彈', '無條件投降'],
						},
						{
							date: new Date('1945'),
							thing: '二戰結束',
							other: ['日本最後投降'],
						},
						{
							date: new Date('1945'),
							thing: '聯合國成立',
							other: ['總部:紐約', '(成立:加州)'],
						},
					],
				},
			],
		},
		{
			dataname: '中國古代',
			data: [
				{
					eraname: '夏商周',
					describe: '黃河流域',
					thing: [
						{
							date: new Date(-2100),
							thing: '夏朝建立',
							other: [
								'夏朝是中國歷史上的第一個王朝',
								'夏朝的首都在今天的河南省安陽市',
							],
						},
						{
							date: new Date(1046),
							thing: '周朝建立',
							other: [
								'周朝是中國歷史上最長的一個王朝',
								'周朝的統治者實行封建制度，進行了大規模的土地分配',
							],
						},
					],
				},
				{
					eraname: '春秋戰國',
					describe: '華夏大地',
					thing: [
						{
							date: new Date(770),
							thing: '春秋時期開始',
							other: [
								'春秋時期是中國歷史上的一個時期，時間大約為公元前770年到公元前476年',
								'春秋時期是中國分裂時期的開端',
							],
						},
						{
							date: new Date(475),
							thing: '戰國時期開始',
							other: [
								'戰國時期是中國歷史上的一個時期，時間大約為公元前475年到公元前221年',
								'戰國時期是中國分裂時期的高峰期',
							],
						},
					],
				},
				{
					eraname: '秦漢唐宋元明清',
					describe: '中國各地',
					thing: [
						{
							date: new Date(221),
							thing: '秦朝統一中國',
							other: [
								'秦朝是中國歷史上的一個短暫王朝，時間大約為公元221年到公元207年',
								'秦始皇統一了六國，建立了中央集權制度',
							],
						},
						{
							date: new Date(618),
							thing: '唐朝建立',
							other: [
								'唐朝是中國歷史上的一個強盛王朝，時間大約為公元618年到公元907年',
								'唐朝的政治、經濟、文化和藝術等方面都取得了巨大的成就',
							],
						},
						{
							date: new Date(960),
							thing: '宋朝建立',
							other: [
								'宋朝是中國歷史上的一個王朝，時間大約為公元960年到公元1279年',
								'宋朝的特點是科技、商業、文化、藝術等方面的繁榮',
							],
						},
						{
							date: new Date(1271),
							thing: '元朝建立',
							other: [
								'元朝是中國歷史上的一個蒙古王朝，時間大約為公元1271年到公元1368年',
								'元朝的統治者是成吉思汗的後代，實行行省制度和科舉制度',
							],
						},
						{
							date: new Date(1368),
							thing: '明朝建立',
							other: [
								'明朝是中國歷史上的一個王朝，時間大約為公元1368年到公元1644年',
								'明朝的特點是政治穩定、經濟繁榮、文化發展和科技進步',
							],
						},
						{
							date: new Date(1644),
							thing: '清朝建立',
							other: [
								'清朝是中國歷史上的最後一個封建王朝，時間大約為公元1644年到1912年',
								'清朝的特點是社會穩定、對外侵略、政治腐敗、經濟落後和文化沉淀',
							],
						},
					],
				},
			],
		},
	];

	const [data, setdata] = useState(era[0].data);

	return (
		<div>
			<Sidelist className='column'>
				{era.map((item, index) => {
					const { dataname, data } = item;
					return (
						<li key={index}>
							<h3 key='default'>
								<button onClick={() => setdata(data)}>{dataname}</button>
							</h3>
							<ul className='row'>
								{data.map((item, index) => {
									const { eraname, thing } = item;
									const data: Era[] = [
										{
											eraname: eraname,
											thing: thing,
										},
									];
									return (
										<li key={index}>
											<button onClick={() => setdata(data)}>{eraname}</button>
										</li>
									);
								})}
							</ul>
						</li>
					);
				})}
			</Sidelist>
			<div>
				<br />
				<br />
			</div>
			<Timeline eradata={data} />
		</div>
	);
}