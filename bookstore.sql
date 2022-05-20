-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 20, 2022 at 06:48 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

CREATE TABLE `author` (
  `author_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `author`
--

INSERT INTO `author` (`author_id`, `name`, `image`) VALUES
(1, 'Nguyễn Nhật Ánh', 'https://cand.com.vn/Files/Image/linhchi/2016/09/19/47ca7ab5-f6d4-43ac-a6dd-24c48bd0647c.jpg'),
(2, 'Nam Cao', 'https://soanbaionline.net/wp-content/uploads/2017/10/Nam-Cao.jpg'),
(3, 'Nguyễn Trọng Phụng', 'https://photo-cms-vovworld.zadn.vn/w500/uploaded/vovworld/znaeng/2018_12_24/vtp_dwve.jpg'),
(4, 'Tô Hoài', 'https://upload.wikimedia.org/wikipedia/vi/thumb/7/73/Nhavan_t%C3%B4_ho%C3%A0i.jpg/220px-Nhavan_t%C3%B4_ho%C3%A0i.jpg'),
(5, 'Hoài Thanh', 'https://nguoinoitieng.tv/images/thumbnail/1/5a.jpg'),
(6, 'Ngô Tất Tố', 'https://upload.wikimedia.org/wikipedia/vi/thumb/9/92/NgoTatTo.jpg/175px-NgoTatTo.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `book_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  `publisher_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`book_id`, `title`, `description`, `price`, `rating`, `publisher_id`, `amount`, `image`) VALUES
(1, 'Cho tôi xin một vé đi tuổi thơ', 'Truyện Cho Tôi Xin Một Vé Đi Tuổi Thơ là sáng tác mới nhất của nhà văn Nguyễn Nhật Ánh. Nhà văn mời người đọc lên chuyến tàu quay ngược trở lại thăm tuổi thơ và tình bạn dễ thương của 4 bạn nhỏ. Những trò chơi dễ thương thời bé, tính cách thật thà, thẳng thắn một cách thông minh và dại dột, những ước mơ tự do trong lòng… khiến cuốn sách có thể làm các bậc phụ huynh lo lắng rồi thở phào. Không chỉ thích hợp với người đọc trẻ, cuốn sách còn có thể hấp dẫn và thực sự có ích cho người lớn trong quan hệ với con mình.', 460, 4, 1, 10, 'https://salt.tikicdn.com/cache/400x400/ts/product/f2/ab/f3/3826a9aaf6d18436e5cd8b7fe8cd71ff.jpg.webp'),
(2, 'Mắt biếc', 'Mắt biếc là một tác phẩm được nhiều người bình chọn là hay nhất của nhà văn Nguyễn Nhật Ánh. Tác phẩm này cũng đã được dịch giả Kato Sakae dịch sang tiếng Nhật để giới thiệu với độc giả Nhật Bản. “Tôi gửi tình yêu cho mùa hè, nhưng mùa hè không giữ nổi. Mùa hè chỉ biết ra hoa, phượng đỏ sân trường và tiếng ve nỉ non trong lá. Mùa hè ngây ngô, giống như tôi vậy. Nó chẳng làm được những điều tôi ký thác. Nó để Hà Lan đốt tôi, đốt rụi. Trái tim tôi cháy thành tro, rơi vãi trên đường về.”… Bởi sự trong sáng của một tình cảm, bởi cái kết thúc buồn, rất buồn khi xuyên suốt câu chuyện vẫn là những điều vui, buồn lẫn lộn … ', 100, 4, 1, 10, 'https://salt.tikicdn.com/cache/400x400/ts/product/2b/b1/b7/60031f112d30ed96bde76d40b5b263dc.jpg.webp'),
(3, 'Tôi thấy hoa vàng trên cỏ xanh', 'Nội dung truyện nói vè tuổi thơ nghèo khó của hai anh em Thiều và Tường ở một làng quê Việt thân thuộc và nên thơ. Là nơi đã chứng kiến những rung động đầu đời của cả hai, tình cảm gia đình, tình anh em yêu thương chân thành, cũng như những đố kỵ, ghen tuông và những nỗi đau trong veo trong quá trình trưởng thành.Với những ký ức đã từng qua, chuyện về con cóc Cậu trời, chuyện ma, chuyện công chúa và hoàng tử, bên cạnh chuyện đói ăn, cháy nhà, lụt lội, tác giả muốn tưởng nhớ về tuổi thơ lắm ngọt ngào lẫn day dứt mà mỗi người đều đã từng trải qua khiến cho người đọc lại càng thấm đẫm tình yêu thương tuổi thơ của mình hơn.', 114, 4, 1, 10, 'https://salt.tikicdn.com/cache/400x400/ts/product/2e/ae/d3/2e400bbfda127802bf5fd46f86ead538.jpg.webp'),
(4, 'Làm bạn với bầu trời', 'Một câu chuyện giản dị, chứa đầy bất ngờ cho tới trang cuối cùng. Vẻ đẹp lộng lẫy, vì lòng vị tha và tình yêu thương, khiến mắt rưng rưng vì một nỗi mừng vui hân hoan. Cuốn sách như một đốm lửa thắp lên lòng khát khao sống tốt trên đời. Viết về điều tốt đã không dễ, viết sao cho người đọc có thể đón nhận đầy cảm xúc tích cực, và muốn được hưởng, được làm những điều tốt dù nhỏ bé mới thật là khó. Làm bạn với bầu trời của Nguyễn Nhật Ánh đã làm được điều này.', 100, 4, 1, 10, 'https://salt.tikicdn.com/cache/400x400/ts/product/af/a1/4b/92477ec9b6688060b2b5d2022a60d3e6.jpg.webp'),
(5, 'Ngồi khóc trên cây', 'Mở đầu là kỳ nghỉ hè tại một ngôi làng thơ mộng ven sông với nhân vật là những đứa trẻ mới lớn có vô vàn trò chơi đơn sơ hấp dẫn ghi dấu mãi trong lòng.   Mối tình đầu trong veo của cô bé Rùa và chàng sinh viên quê học ở thành phố có giống tình đầu của bạn thời đi học? Và cái cách họ thương nhau giấu giếm, không dám làm nhau buồn, khát khao hạnh phúc đến nghẹt thở có phải là câu chuyện chính? Bạn sẽ được tác giả dẫn đi liền một mạch trong một thứ cảm xúc rưng rưng của tình yêu thương. Bạn sẽ thấy may mắn vì đang đuợc sống trong cuộc sống này, thấy yêu thế những tấm tình người… tất cả đều đẹp hồn hậu một cách giản dị.', 97, 4, 1, 10, 'https://salt.tikicdn.com/cache/400x400/ts/product/ab/e4/1d/99f8e207c44bee4ac86c06cfeaefba8e.jpg.webp'),
(6, 'Chí Phèo', 'Với những tình tiết hấp hẫn Nam Cao đã đưa người đọc tái hiện bức tranh chân thực nông thôn Việt Nam trước 1945, nghèo đói, xơ xác trên con đường phá sản, bần cùng, hết sức thê thảm, người nông dân bị đẩy vào con đường tha hóa, lưu manh hóa.Nam Cao không hề bôi nhọ người nông dân, trái lại nhà văn đi sâu vào nội tâm nhân vật để khẳng định nhân phẩm và bản chất lương thiện ngay cả khi bị vùi dập, cướp mất cà nhân hình, nhân tính của người nông dân, đồng thời kết án đanh thép cái xã hội tàn bạo đó trước 1945.', 75, 4, 2, 10, 'https://salt.tikicdn.com/cache/400x400/ts/product/99/06/ec/5df9b88b6ec154aa5c5d546f8c536f9d.jpg.webp'),
(7, 'Lão hạc', 'Lão Hạc là một lão nông dân nghèo và cô đơn. Vì vợ mất sớm, con trai bỏ nhà đi mấy n,m không về, lão sống cùng một con chó mà lão vô cùng quý, đó là cậu vàng. Trận ốm nặng khiến lão không còn sức để làm công như trước, đói nghèo túng quẫn khiến lão phải bán đi cậu Vành dù lòng rất xót xa và thương nó. Rồi lão gửi lại mảnh vườn và tiền lo ma chay cho ông Giáo - người hàng xóm của lão và chọn cái chết bằng bã chó để kết thúc cuộc đời mình.', 51, 4, 2, 10, 'https://salt.tikicdn.com/cache/400x400/ts/product/94/a3/64/ce70924ab66de9d8846608be7c9c8368.jpg.webp'),
(8, 'Đời thừa', 'Đời Thừa đã ghi lại chân thật hình ảnh buồn thảm của người tri thức tiểu tư sản nghèo, nhà văn Nam Cao đã phác hoạ rõ nét hình ảnh vừa bi vừa hài của lớp người này trở nên đầy ám ảnh. Giá trị của \" Đời Thừa \" không phải chỉ ở chỗ đã miêu tả chân thật cuộc sống nghèo khổ, bế tắc của người trí thức tiểu tư sản nghèo, đã viết về người tiểu tư sản không phải với ngòi bút vuốt ve, thi vị hoá, mà còn vạch ra cả những thói xấu của họ.', 51, 4, 2, 10, 'https://salt.tikicdn.com/cache/400x400/ts/product/06/70/5d/3fec3f3b2b59fa47a0cdcfdf403f21c6.jpg.webp'),
(9, 'Làm đĩ', 'Làm Đĩ là một thiên tả chân tiểu thuyết mục đích hô hào nhà đạo đức và bậc làm cha mẹ lo chăm đến hạnh phúc của con cái và phải để ý đến cái sự mà những thành kiến hủ bại vẫn coi là điều bẩn thỉu, tức là cái sự dâm', 69, 4, 2, 10, 'https://salt.tikicdn.com/cache/400x400/ts/product/ee/a9/50/d23e2d4dc76e4870cab66b76d48f8801.jpg.webp'),
(10, 'Vỡ đê', 'Vỡ đê phản ánh hiện thực trên một phạm vi khá rộng, từ thành thị đến nông thôn, song tập trung lên án những chính sách, thủ đoạn thống trị của bọn thực dân, quan lại đã đẩy người nông dân vào tình cảnh đói rét cơ cực. Một tác phẩm hiện thực phê phán của Vũ Trọng Phụng đã cho người đọc thấy lại những ngày tăm tối của dân tộc ta dưới ách thống trị của thực dân phong kiến trong giai đoạn trước 1945.Trong Vỡ đê ông đã ca tụng những người cộng sản trong toà báo Lao động thời mặt trận bình dân, những người ngang tàng coi nhà tù là một cái trường đào tạo nên những tay chiến sĩ của cái phần nhân loại bị bóc lột đề chiến đấu với bọn có ở hai vai của mình những cánh tay lao động của người khác.', 70, 4, 2, 10, 'https://salt.tikicdn.com/cache/400x400/ts/product/0a/51/c6/4f602d647d6553de1dfdb64b428374c0.jpg.webp'),
(11, 'Số đỏ', 'Số đỏ xoay quanh nhân vật làm đảo điên Hà Nội những năm 1930 - 1940, Xuân Tóc Đỏ - từ một thằng bé mồ côi, kiếm sống bằng đủ thứ nghề: trèo me, trèo sấu, nhặt bóng ở sân quần vợt, quảng cáo thuốc lậu... nhờ thủ đoạn xảo trá, “nhờ thời” đã trở thành đốc tờ Xuân, nhà cải cách xã hội, giáo sư quần vợt, thậm chí là anh hùng cứu quốc, là vĩ nhân... Sử dụng lối tương phản giữa cái đồi bại, thối nát vô luân với cái hài, cái trào phúng đã giúp cuốn tiểu thuyết thành công trong việc lột trần những “quái thai” thời đại trong buổi giao thời. Từ đó, tác phẩm cũng đã đả kích cay độc cái xã hội tư sản bịp bợm, đang chạy theo lối sống văn minh rởm, hết sức lố lăng thối nát. Bên cạnh đó, tác phẩm cũng đả kích những phong trào được thực dân khuyến khích như: phong trào Âu hoá, thể dục thể thao, chấn hưng Phật giáo', 42, 4, 2, 10, 'https://salt.tikicdn.com/cache/400x400/ts/product/a7/14/57/2160a52816265cd80ea8cdc7519418f2.jpg.webp'),
(12, 'Dế mèn phiêu lưu ký', 'Dế mèn phiêu lưu ký là truyện dài của nhà văn Tô Hoài kể về cuộc phiêu lưu của chú Dế Mèn cùng các bạn bè.Trên đường đi, họ đã gặp phải nhiều khó khăn nguy hiểm, nhưng những gian nan đã cho họ nhiều bài học quý giá, và thắt chặt tình bạn của họ. Ngoài việc khuyến khích những người trẻ tuổi dám mơ ước, dám hành động, truyện còn là khát vọng hoà bình giữa các loài, là mong ước anh em bốn bể có thể cùng chung sống hoà thuận, để thế giới không còn cảnh xung đột, thù ghét.', 150, 4, 2, 10, 'https://salt.tikicdn.com/cache/400x400/ts/product/f1/c7/3e/2b686d818fc0f3e0fc33c9e4ff15f432.png.webp'),
(13, 'Quê người', 'Quê người của Tô Hoài còn cho ta thấy biết bao cái giản dị và nên thơ của người dân quê Việt Nam – những người tuy phác thực mà rất mơ màng: họ vốn là tác giả những câu ca dao bất hủ. Hãy xem cái cách hẹn hò của cặp tình nhân Hời và Ngây, cách hẹn hò ý nhị của Tristan cùng Iseut. Đông Tây có lẽ gặp nhau ở chỗ này.', 61, 4, 3, 10, 'https://salt.tikicdn.com/cache/400x400/ts/product/d8/96/da/26ba5b1bdc54e00f71a61ac84031e9d7.jpg.webp'),
(14, 'Thi Nhân Việt Nam', 'Thi nhân Việt Nam là công trình biên khảo có giá trị tin cậy về phong trào Thơ mới, cả về ba mặt: Nghiên cứu, phê bình và tuyển thơ. Cuốn sách ra đời sau khi hành trình thơ mới đã đi được 10 năm và vẫn còn tiếp tục chặng đường, nhưng vẫn có ý nghĩa của một công trình tổng kết cả phong trào. Cuốn sách có giá trị nghệ thuật rất cao với giọng văn tâm tình, âm điệu nhẹ nhàng và câu từ duyên dáng, dí dỏm.', 94, 4, 2, 10, 'https://salt.tikicdn.com/cache/400x400/ts/product/80/c4/f2/99957ba12810a7e48ff37f4defe1d030.jpg.webp'),
(15, 'Cảm ơn người lớn', 'Cảm ơn người lớn - một áng văn lãng mạn trong giọng hài hước đặc biệt “dành cho trẻ em, và những ai từng là trẻ em”.Bạn sẽ gặp lại Mùi, Tủn, Tí sún, Hải cò… của Cho tôi xin một vé đi tuổi thơ, cùng chơi những trò chơi quen thuộc, và được đắm mình vào những ước mơ điên rồ, ngốc nghếch nhưng trong veo của tuổi mới lớn hồn nhiên và đầy ắp dự định. Và cả khi họ đã trưởng thành, bạo chúa thời gian đã vùng vẫy thế nào trong cuộc đời của những nhân vật mà bạn yêu quý…', 25, 4, 1, 10, 'https://salt.tikicdn.com/cache/400x400/ts/product/5e/33/c8/3aaf850f09f76d25543635dd907c4831.jpg.webp'),
(16, 'Chúc một ngày tốt lành', 'Đọc tựa cuốn sách mới nhất của nhà văn Nguyễn Nhật Ánh là muốn mở ngay trang sách. Bạn sẽ thấy một thứ ngôn ngữ lạ của Hàn Quốc hay của nước nào tùy bạn đoán, Gô un un là Chào buổi sáng; Un gô gô là Chúc ngủ ngon, và nữa, Chiếp un un; Ăng gô gô; Chiếp chiếp gô…Nhân vật chính là hai con heo con, Lọ Nồi thông minh và Đeo Nơ xinh đẹp, cùng bạn chó Mõm Ngắn con chị Vện, mẹ Nái Sề, anh Đuôi Xoăn, Cánh Cụt và bọn gà chíp nhà chị Mái Hoa,… đã làm nên một câu chuyện vô cùng thú vị.', 80, 4, 1, 10, 'https://salt.tikicdn.com/cache/400x400/ts/product/3e/69/4f/bffa6b4a004449b8268f60a2b3442689.jpg.webp'),
(17, 'Tôi là Bêtô', 'Truyện Tôi là Bêtô là sáng tác của nhà văn Nguyễn Nhật Ánh được viết theo phong cách hoàn toàn khác so với những tác phẩm trước đây của ông. Những mẩu chuyện, hay những phát hiện của chú chó Bêtô đầy thú vị, vừa hài hước, vừa chiêm nghiệm một cách nhẹ nhàng “vô vàn những điều thú vị mà cuộc sống cố tình giấu kín ở ngóc ngách nào đó trong tâm hồn của mỗi chúng ta”.', 350, 4, 1, 10, 'https://salt.tikicdn.com/cache/400x400/ts/product/de/d7/97/b9d7489cc2602bbbd45f23b0af1d8d48.jpg.webp'),
(18, 'Tắt đèn', 'Theo tôi tiên tri, thì cuốn Tắt đèn còn phải sống lâu thọ hơn cả một số văn gia đương kim hôm nay. Chị Dậu, đích là tác giả Ngô Tất Tố hóa thân ra mà thôi. Chị Dậu là cái đốm sáng đặc biệt của Tắt đèn. Nếu ví toàn truyện Tắt đèn là một khóm cây thì chị Dậu là cả gốc cả ngọn cả cành, và chính chị Dậu đã nổi gió lên mà rung cho cả cái cây dạ hương Tắt đèn đó lên.', 40, 4, 4, 10, 'https://salt.tikicdn.com/cache/400x400/media/catalog/product/i/m/img843_7.jpg.webp');

-- --------------------------------------------------------

--
-- Table structure for table `book_author`
--

CREATE TABLE `book_author` (
  `book_id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `book_author`
--

INSERT INTO `book_author` (`book_id`, `author_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 2),
(7, 2),
(8, 2),
(9, 3),
(10, 3),
(11, 3),
(12, 4),
(13, 4),
(14, 5),
(15, 1),
(16, 1),
(17, 1),
(18, 6);

-- --------------------------------------------------------

--
-- Table structure for table `book_category`
--

CREATE TABLE `book_category` (
  `book_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `publisher`
--

CREATE TABLE `publisher` (
  `publisher_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `publisher`
--

INSERT INTO `publisher` (`publisher_id`, `name`, `address`, `image`) VALUES
(1, 'NXB Trẻ', 'TP-HCM', 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/ac/NXBTrelogo.jpeg/220px-NXBTrelogo.jpeg'),
(2, 'NXB Văn Học', 'TP-HCM', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRE4vd2wvr_MKlFaS8yv2Z9RwPVfrj-b3TUw&usqp=CAU'),
(3, 'NXB Kim Đồng', 'TP-HN', 'https://salt.tikicdn.com/media/publishers/Publishers-19.jpg'),
(4, 'NXB Giáo Dục', 'TP-HN', 'https://bookbuy.vn/Res/Images/Supplier/b556612f-6ba2-4f49-bb86-18629cd9f526.jpg?w=200&h=200&scale=canvas');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`author_id`);

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`book_id`),
  ADD KEY `fk_book_publisher` (`publisher_id`);

--
-- Indexes for table `book_author`
--
ALTER TABLE `book_author`
  ADD PRIMARY KEY (`book_id`,`author_id`),
  ADD KEY `fk_book_author_author` (`author_id`);

--
-- Indexes for table `book_category`
--
ALTER TABLE `book_category`
  ADD PRIMARY KEY (`book_id`,`category_id`),
  ADD KEY `fk_book_category_category` (`category_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `publisher`
--
ALTER TABLE `publisher`
  ADD PRIMARY KEY (`publisher_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `author`
--
ALTER TABLE `author`
  MODIFY `author_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `book_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `publisher`
--
ALTER TABLE `publisher`
  MODIFY `publisher_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `book`
--
ALTER TABLE `book`
  ADD CONSTRAINT `fk_book_publisher` FOREIGN KEY (`publisher_id`) REFERENCES `publisher` (`publisher_id`) ON UPDATE CASCADE;

--
-- Constraints for table `book_author`
--
ALTER TABLE `book_author`
  ADD CONSTRAINT `fk_book_author_author` FOREIGN KEY (`author_id`) REFERENCES `author` (`author_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_book_author_book` FOREIGN KEY (`book_id`) REFERENCES `book` (`book_id`) ON UPDATE CASCADE;

--
-- Constraints for table `book_category`
--
ALTER TABLE `book_category`
  ADD CONSTRAINT `fk_book_category_book` FOREIGN KEY (`book_id`) REFERENCES `book` (`book_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_book_category_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
