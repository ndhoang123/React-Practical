1. useState()
- useState() giúp functional component có thể dùng state.
- useState() trả về một mảng 2 phần tử [name, setName]. name sẽ lấy init value khi ta định nghĩa array, 
và nó sẽ được update state bởi setName.
- useState() áp dụng replacing thay vì merging như bên class component.
- Initial state callback chỉ thực thi 1 lần đầu.
- Muốn clone 1 array a thì ta sử dụng [...a]

2. Side effect:
a. Side effect: Sẽ thực hiện các việc ở ngoài component.
- Gọi API để lấy dữ liệu.
- Tương tác DOM.
- Subscription.
- setTimeout, setInterval.

b. Có hai loại side effect:
- Effect cần clean up: setTimeout, setInterval.
- Effect không cần clean up: gọi API, tương tác DOM.

3. useEffect():
- Là một React hook để thực hiện side effect.
- Được thực thi sau mỗi lần render, và được thực thi ít nhất một lần sau lần render đầu tiên.
- Effect cleanup sẽ được thực thi trước run effect lần tiếp theo hoặc unmount.
- Có 3 loại dependency trong useEffect:
    + Không có dependency: Nó sẽ luôn luôn render.
    + Có [] tại dependency: Nó render một lần với useEffect, và cleanup khi unMount.
    + Có param trong [] tại dependency: Nó sẽ render khi mà param thay đổi.
- Cấu trúc của một code useEffect:
function App() {
    // executed before each render
    const [color, setColor] = useState('deeppink');

    // executed after each render
    useEffect(() => {
        // do your side effect here ...
        return () => {
        // Clean up here ...
        // Executed before the next render or unmount
        };
    }, []);

    // rendering
    return <h1>Easy Frontend</h1>;
}
- Life cycle:
MOUNTING
    + rendering
    + run useEffect()

UPDATING
    + rendering
    + run `useEffect() cleanup` nếu dependencies thay đổi.
    + run `useEffect()` nếu dependencies thay đổi.

UNMOUNTING
    + run `useEffect() cleanup`.